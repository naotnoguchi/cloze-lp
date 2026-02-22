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

このリポジトリは `Astro` なので、GitHub Pages のデフォルト `Jekyll` ビルドではなく `GitHub Actions` デプロイを使います。

1. リポジトリの **Settings → Pages** を開く。
2. **Source** を **GitHub Actions** に変更する。
3. `main` ブランチに push すると、`.github/workflows/deploy-pages.yml` が `dist/` を Pages にデプロイします。

`Deploy from a branch` で `main` の `/ (root)` を指定すると、Jekyll が走って失敗する場合があります。

## 技術スタック

- [Astro](https://astro.build) 5.x
- 静的サイト（SSG）、ベースパス `/cloze-lp/` 対応

## 文言の変更

- トップ・共通ナビ: `src/i18n/translations.ts`
- 利用規約・プライバシーポリシーの本文も同ファイル内の `terms` / `privacy` を編集してください。`[DATE_PLACEHOLDER]` や `[PLACEHOLDER]` は必要に応じて実際の日付・問い合わせ先などに置き換えてください。
