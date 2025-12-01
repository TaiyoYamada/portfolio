# CI/CD Setup Instructions

このプロジェクトは、GitHub Actionsを使用してmainブランチへのpush時に自動的にコード品質チェックとVercelへのデプロイを行います。

## 🔧 初期セットアップ

### 1. Vercelトークンの取得

1. [Vercel Account Tokens](https://vercel.com/account/tokens) にアクセス
2. 新しいトークンを作成（例: `GitHub Actions CI/CD`）
3. トークンをコピー

### 2. Vercel Project IDとOrg IDの取得

ローカルで以下のコマンドを実行：

```bash
# Vercel CLIをインストール（まだの場合）
npm install -g vercel

# プロジェクトをリンク
vercel link
```

これにより `.vercel/project.json` が作成されます：

```json
{
  "projectId": "prj_xxxxx",
  "orgId": "team_xxxxx"
}
```

### 3. GitHubシークレットの設定

GitHubリポジトリで以下を設定：

1. リポジトリの **Settings** → **Secrets and variables** → **Actions** に移動
2. **New repository secret** をクリックして以下を追加：

| Secret Name | Value | 説明 |
|------------|-------|------|
| `VERCEL_TOKEN` | 手順1で取得したトークン | Vercelへの認証 |
| `VERCEL_ORG_ID` | `.vercel/project.json`の`orgId` | Vercel組織ID |
| `VERCEL_PROJECT_ID` | `.vercel/project.json`の`projectId` | VercelプロジェクトID |

### 4. 環境変数（オプション）

プロジェクトで環境変数を使用している場合：

| Secret Name | Value | 説明 |
|------------|-------|------|
| `NEXT_PUBLIC_SITE_URL` | サイトのURL（例: `https://your-site.vercel.app`） | サイトURL |

その他の環境変数はVercelダッシュボードで設定してください。

## 🚀 ワークフローの動作

### mainブランチへのpush時

1. **Code Quality & Build** ジョブが実行されます：
   - 依存関係のインストール
   - ESLintによるコードチェック
   - TypeScriptの型チェック
   - プロジェクトのビルド検証

2. **Deploy to Vercel** ジョブが実行されます（上記が成功した場合）：
   - Vercelへの本番環境デプロイ

### Pull Request作成時

- Code Quality & Build ジョブのみ実行（デプロイはしません）

## 📝 トラブルシューティング

### ワークフローが失敗する場合

1. GitHubの **Actions** タブでエラーログを確認
2. シークレットが正しく設定されているか確認
3. ローカルで `npm run build` が成功するか確認

### Vercelデプロイが失敗する場合

- `VERCEL_TOKEN`、`VERCEL_ORG_ID`、`VERCEL_PROJECT_ID` が正しく設定されているか確認
- Vercelトークンに適切な権限があるか確認

## 🔗 参考リンク

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel CLI Documentation](https://vercel.com/docs/cli)
- [Vercel GitHub Actions](https://github.com/amondnet/vercel-action)
