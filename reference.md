### MyCloset

パーソナルクローゼットを写真で管理し、コーディネートやメンテナンス履歴まで一括で記録できる iOS 向けアプリです。複数の「持ち主」を切り替えながら、家族全員の服を一元管理できます。

---

### コンセプト

- **「なんとなく着なくなった服」を可視化して、クローゼットをスリムにする**
  - 写真ベースでアイテムを一覧し、「よく着ている服」「しばらく着ていない服」がひと目でわかる。
- **服の“資産”としての管理**
  - 購入価格・購入日・購入場所を記録し、「どれくらいコスパ良く着られているか」を把握。
- **コーディネートとメンテナンスの履歴を一元管理**
  - いつ・どのコーデで着たか、いつクリーニングやお手入れをしたかを紐づけて記録。
- **家族単位でのクローゼット管理**
  - 持ち主ごとにデータを完全に分離しつつ、同じアプリ内で簡単に切り替え可能。

---

### 主なユースケース

- **シーズンごとの棚卸し**
  - シーズンごとに手持ちの服を一覧し、「似た服」「着ていない服」を把握。
- **子どもの服・制服の管理**
  - 成長に応じた買い替えサイクルを記録しやすくする。
- **高価なアイテムのメンテ履歴管理**
  - コートや靴などのクリーニング／修理履歴を残し、「そろそろ手入れした方がいい」タイミングを把握。
- **日々のコーデ記録**
  - 日々のコーデをカレンダーで振り返り、「着回しの偏り」をチェック。

---

### 技術構成

- **プラットフォーム**
  - iOS / iPadOS（SwiftUI ベースのネイティブアプリ）

- **言語・フレームワーク**
  - **Swift**
  - **SwiftUI**
  - **SwiftData**
    - `@Model` / `@Query` / `ModelContainer` などを用いたローカル永続化
  - **PhotosUI / UIKit ブリッジ**
    - `PhotosPicker` によるフォトライブラリ読み込み
    - `UIImagePickerController` を用いたカメラ撮影

- **データ永続化**
  - **SwiftData（オンデバイス保存）**
    - モデル例: `Owner`, `ClothingItem`, `ClothingImage`, `ImageAsset`,
      `Coordinate`, `CoordinateItem`, `CoordinateTemplate`, `CoordinateTemplateItem`,
      `MaintenanceRecord` など
    - 単一 `ModelContainer` によるスキーマ管理

- **UI 構成**
  - **タブ構成**
    - `TabView`
      - クローゼット（アイテム一覧）
      - コーディネート（カレンダービュー）
      - メンテナンス（メンテ履歴）
  - **ナビゲーション**
    - 各タブ内は `NavigationStack` による階層遷移
  - **シート / フルスクリーンカバー**
    - 持ち主切替メニュー
    - アイテム編集／作成
    - コーデ編集／作成
    - 一括編集・一括インポート

---

### アーキテクチャ概要

- **エントリポイント**
  - `MyClosetApp`
    - `Schema` に全ドメインモデルを登録し、`ModelContainer` を生成
    - `RootView` を `WindowGroup` の root として表示
    - アプリ全体に以下を `environment` で注入
      - `SelectedOwnerStore`（現在の持ち主管理）
      - `AppChromeStore`（タブバーなど UI クロムの表示制御）

- **RootView**
  - アプリ全体のタブ構成を持つコンテナビュー
  - **タブ:**
    - クローゼット: `ClothingItemListView`
    - コーディネート: `CoordinateCalendarView`
    - メンテナンス: `MaintenanceRecordListView`
  - **共通要素:**
    - 現在の持ち主情報のロード (`ownerStore.bootstrap`)
    - ナビゲーションバーの左上から「持ち主切替メニュー(`MenuView`)」をシート表示
    - 持ち主未選択／切替中の場合はローディング画面を表示

---

### 主な機能一覧

#### クローゼット（アイテム管理）

- **アイテム一覧表示（グリッド）**
  - `ClothingItemListView`
  - カテゴリごとにセクション分けされたグリッドレイアウト
  - サイドにインデックスバー（カテゴリジャンプ用）を表示
  - アイテムのメイン画像サムネイルを 3 列グリッドで表示

- **アイテム作成・編集**
  - 画像ベースでのアイテム登録
  - 管理項目:
    - カテゴリ（`ClothingCategory`）
    - 色（`ClothingColor`）
    - 対応シーズン（`Season` の `Set`）
    - サイズ・ブランド・メモ
    - 購入情報（購入日・価格・場所）
  - メイン画像＋複数画像の管理（`ClothingImage` / `ImageAsset`）

- **画像取り込み**
  - **シングルインポート:**
    - カメラでの撮影
    - フォトライブラリから 1 枚選択
  - **一括インポート:**
    - フォトライブラリから複数枚を選択し、画像 1 枚につき 1 アイテムを自動作成
    - カテゴリ・色などはデフォルト値で作成し、後から一括編集が可能

- **一括編集**
  - グリッドから複数アイテムを選択して、以下をまとめて変更:
    - カテゴリ
    - 色
    - シーズン（置き換え / 追加 / 削除）
    - ブランド・サイズ・メモ・購入場所
    - 購入日（設定 / クリア）
    - 購入価格（設定 / クリア）

- **持ち主単位のフィルタリング**
  - `SelectedOwnerStore.currentID` に紐づくアイテムのみ表示
  - 持ち主切替時には一覧を自動で再構築

- **アーカイブ（手放し）管理**
  - `isArchived` フラグで「手放した」アイテムを論理削除
  - 通常の一覧からは `isArchived == false` のみを表示

---

#### コーディネート管理（カレンダービュー）

- **月別カレンダー表示**
  - `CoordinateCalendarView`
  - 表示モード:
    - リスト表示（縦リスト）: 1 日ごとにサムネイルストリップ
    - 7 列グリッド表示: 月間カレンダー形式
  - 表示モードは `AppStorage("CoordinateCalendarView.displayMode")` で永続化

- **コーデ記録**
  - `Coordinate` モデル
    - 日付
    - 紐づくアイテム（`CoordinateItem` 経由）
    - コーデ用の合成画像 (`coordinateImage`) など
  - 日付セルをタップ:
    - 既存コーデあり → コーデ詳細へ遷移
    - 既存コーデなし → その日付で新規コーデ作成画面を表示

- **ナビゲーション**
  - 左右スワイプ（ページング）で月を移動
  - `MonthJumpPicker` による任意年月ジャンプ
  - 右下フローティング「今日」ボタンで今月＆本日にジャンプ

- **サムネイル表示**
  - 日毎に以下の順で画像を合成またはリストアップ:
    - コーデ専用画像（`coordinateImage`）
    - コーデに含まれるアイテムのメイン画像 (`ClothingItem.mainImage`)

---

#### メンテナンス管理

- **メンテ履歴一覧・編集**
  - `MaintenanceRecord` モデルにより、以下を記録:
    - 日付
    - 内容（クリーニング／洗濯／修理など）
    - 紐づくアイテム群
  - アイテム側から参照:
    - 最終メンテ日 (`lastMaintenanceDate`)
    - メンテ以降の着用回数 (`wearCountAfterLastMaintenance`)

- **アイテムとの連携**
  - アイテム詳細からのメンテ履歴参照
  - アイテム削除時も、メンテ履歴は残す方針（`deleteRule: .nullify`）

---

#### 持ち主管理 & 共通メニュー

- **持ち主管理 (`Owner`)**
  - 持ち主一覧・追加・編集・削除 (`MenuView`, `OwnerEditorView`)
  - 表示項目:
    - 持ち主名・アイコン・カラー
    - アイテム数 / コーデ数 / テンプレ数 / メンテ数
    - 最終コーデ日・最終メンテ日
  - 削除時:
    - 関連するアイテム、コーデ、テンプレート、メンテ記録も削除される旨をアラートで明示

- **メニュー画面**
  - コーデテンプレート一覧 (`CoordinateTemplateListView`)
  - プラン情報 (`PlanInfoView`)
  - このアプリについて (`AboutAppView`)

---

#### コーデテンプレート

- **テンプレート管理**
  - `CoordinateTemplate` / `CoordinateTemplateItem`
  - よく使う組み合わせをテンプレートとして保存
  - 新しいコーデ作成時にテンプレートから呼び出して時短

---

### データモデル概要（抜粋）

- **Owner**
  - `name`, `iconType`, `color`, `items`, `coordinates`, `templates`, `maintenances` など
  - 集計プロパティ: `itemsCount`, `coordinatesCount`, `templatesCount`, `maintenancesCount`, `lastCoordinateDate`, `lastMaintenanceDate`

- **ClothingItem**
  - 基本属性: `category`, `color`, `seasons`, `size`, `brand`, `notes`
  - 購入情報: `purchaseDate`, `purchasePrice`, `purchasePlace`
  - 状態管理: `isArchived`, `archivedAt`, `createdAt`, `updatedAt`
  - 関連:
    - `owner`（1 対多）
    - `images: [ClothingImage]`（カスケード削除）
    - `maintenanceRecords: [MaintenanceRecord]`（nullify）
    - `coordinateItems: [CoordinateItem]`
    - `coordinateTemplateItems: [CoordinateTemplateItem]`
  - 派生情報:
    - `displayTitle`, `sortedImages`, `mainImage`
    - `totalWearCount`, `lastMaintenanceDate`, `wearCountAfterLastMaintenance`

- **ImageAsset / ClothingImage**
  - フル画像・サムネイルのバイナリデータとサイズ情報
  - アイテムとの関連（`sortOrder` による並び替え）

- **Coordinate / CoordinateItem**
  - 日付ごとのコーデ
  - コーデに含まれるアイテムの集合

- **CoordinateTemplate / CoordinateTemplateItem**
  - コーデパターンのテンプレート
  - テンプレートに含まれるアイテムの集合

- **MaintenanceRecord**
  - メンテナンス実施日・内容
  - 関連アイテム（多対多）

---

### 開発環境 / 動作要件（想定）

- **開発環境**
  - Xcode 15 以降
  - Swift 5.10 以降
  - iOS 17 / iPadOS 17 以降（SwiftData 利用のため）

- **ビルド方法（概要）**
  - リポジトリをクローン
  - `MyCloset.xcodeproj` を Xcode で開く
  - ターゲットデバイス（実機推奨）を選択してビルド & 実行  
    ※ カメラ機能を使う場合は実機が必要です。

---

### 今後の拡張アイデア（例）

- **ダッシュボード**
  - アイテムの「着用頻度」や「コスパ」を可視化する。
- **手放し候補の自動提案**
  - シーズンごとに「しばらく着ていない服」をリストアップ。
- **データ同期**
  - iCloud 経由で複数デバイス間のデータ共有。
- **ウィジェット連携**
  - ホーム画面やロック画面にコーデ提案を表示。
- **バックアップ**
  - シンプルなインポート／エクスポート機能。

