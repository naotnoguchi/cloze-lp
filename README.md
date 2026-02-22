# CLOZE — Landing Page

CLOZE アプリの紹介用ランディングページです。英語・日本語に対応し、GitHub Pages で公開することを想定しています。

- **本番URL**: https://naotnoguchi.github.io/cloze-lp/

## ページ構成

| パス | 内容 |
|------|------|
| `/` | 言語に応じて `/en/` または `/ja/` へリダイレクト |
| `/en/`, `/ja/` | トップ（アプリ紹介） |
| `/en/terms/`, `/ja/terms/` | 利用規約 |
| `/en/privacy/`, `/ja/privacy/` | プライバシーポリシー |

## 開発

```bash
npm install
npm run dev
```

- 開発サーバー: http://localhost:4321/cloze-lp/

## ビルド・プレビュー

```bash
npm run build
npm run preview
```

- プレビュー時もベースパスは `/cloze-lp/` で動作します。

## GitHub Pages へのデプロイ

1. リポジトリの **Settings → Pages** を開く。
2. **Source**: Deploy from a branch
3. **Branch**: `main`（または使用しているブランチ）、**Folder**: `/ (root)` のままにし、**Save**。
4. デプロイ用にビルド成果物を `gh-pages` ブランチなどに push する方法が一般的です。

### 手動デプロイ例（gh-pages ブランチ）

```bash
npm run build
npx gh-pages -d dist
```

`gh-pages` パッケージを使う場合:

```bash
npm install -D gh-pages
```

`package.json` にスクリプトを追加する例:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

その後 `npm run deploy` でビルドと push が実行されます。

### GitHub Actions でデプロイする場合

**.github/workflows/deploy.yml** を作成し、`main` への push でビルドして `gh-pages` ブランチにデプロイするワークフローを組むこともできます。

## 技術スタック

- [Astro](https://astro.build) 5.x
- 静的サイト（SSG）、ベースパス `/cloze-lp/` 対応

## 文言の変更

- トップ・共通ナビ: `src/i18n/translations.ts`
- 利用規約・プライバシーポリシーの本文も同ファイル内の `terms` / `privacy` を編集してください。`[DATE_PLACEHOLDER]` や `[PLACEHOLDER]` は必要に応じて実際の日付・問い合わせ先などに置き換えてください。
