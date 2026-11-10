# CONTRIBUTING

このリポジトリは山田大陽の個人のポートフォリオサイト（https://taiyoyamada.com）です。表示の崩れやリンク切れを見つけたら、issue で教えてもらえると助かります。経歴や記事の中身は本人が書くので、中身の誤りに気づいたときも、PR ではなく issue で知らせてください。

## 開発環境

CI と同じ Node.js 22 を使います。依存は `package-lock.json` どおりに入れます。

```sh
npm ci
npm run dev
```

Articles のページは、ビルドのときに Qiita API から記事を取ってきます。手元で表示するには、`.env` に Qiita のアクセストークンを書きます。トークンがなくてもほかのページは動き、Articles に記事が出ないだけです。

```sh
QIITA_API_TOKEN=xxxxxxxx
```

## コマンド

| コマンド         | 内容                                         |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | 開発サーバーを起動する                       |
| `npm run lint`   | prettier で書式を、eslint でコードを確かめる |
| `npm run check`  | svelte-check で型を確かめる                  |
| `npm run build`  | 本番用にビルドする                           |
| `npm run format` | prettier で書式をそろえる                    |

PR を出す前に `npm run lint` と `npm run check` を通してください。CI（`.github/workflows/ci.yml`）では、この2つに加えて `npm run build` も回します。

## 内容の置き場所

News は `src/content/news/` に Markdown を1つ置くと、一覧と個別ページに出ます。ファイル名は `2026-09-13-iosdc-japan-2026.md` のように日付から始めます。拡張子を除いたファイル名が、そのまま `/news/2026-09-13-iosdc-japan-2026` の URL になります。

```markdown
---
title: iOSDC Japan 2026に参加
date: 2026-09-13
category: note
link: ''
image: /news/iOSDC2026.JPG
---

本文（Markdown）
```

`category` は `talk`、`award`、`release`、`media`、`note` のどれかです。ほかの値を書くと `note` として扱います。写真は `static/news/` に置き、`image` には `/news/` から始まるパスを書きます。

経歴、受賞、資格、制作物、研究、スキルは、`src/lib/components/sections/` の `Experience.svelte`、`Awards.svelte`、`Certifications.svelte`、`Projects.svelte`、`Research.svelte`、`Skills.svelte` の先頭にある配列に直接書いています。

## ブランチとコミット

`main` から `feat/hero-remove-swarm` のようにブランチを切ります。頭には変更の種類を付けます。

コミットメッセージは `type: 日本語の要約` の形で書きます。type は `feat`、`fix`、`refactor`、`docs`、`test`、`chore` のどれかです。1つのコミットには1つの変更だけを入れます。

```
feat: iOSDC Japan 2026 参加の記事を追加
fix: スマホで ABOUT ME バッジが見出しに重なるのを直す
```

## PR

PR は `main` に向けて出し、本文はテンプレートに沿って書きます。CI と Vercel のプレビューが通ったら、マージコミットで `main` に入れます。`main` に入ると Vercel から本番に出ます。
