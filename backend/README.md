
# Voice Discussion App バックエンド

これは、Voice Discussion App のバックエンドサーバーです。Node.js と Express で構築されています。

## 前提条件

- Node.js (v18.20.3 以降)
- npm (Node Package Manager)

## セットアップ

1. リポジトリをクローンし、バックエンドディレクトリに移動します:

   ```bash
   git clone https://github.com/yourusername/voice_discussion_app.git
   cd voice_discussion_app/backend
   ```

2. 必要な依存関係をインストールします:

   ```bash
   npm install
   ```

3. `backend` ディレクトリに `.env` ファイルを作成し、以下の環境変数を追加します:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=voice_discussion_db
   DB_USER=your_username
   DB_PASSWORD=your_password
   ```

   `your_username` と `your_password` を実際のデータベースのユーザー名とパスワードに置き換えてください。

## サーバーの起動

1. サーバーを起動します:

   ```bash
   node index.js
   ```

   サーバーは `.env` ファイルに指定されたポート (デフォルトは 3000) で起動します。

2. Webブラウザで `http://localhost:3000` にアクセスして、サーバーが起動していることを確認します。「Hello World!」というメッセージが表示されるはずです。

## フォルダ構成

```
backend/
│
├── .env               # 環境変数
├── index.js           # サーバーのエントリーポイント
├── package.json       # プロジェクトの設定と依存関係
├── controllers/       # コントローラ（必要に応じて）
├── models/            # モデル（必要に応じて）
├── routes/            # ルーティング（必要に応じて）
└── utils/             # ユーティリティ（必要に応じて）
```

## API エンドポイント

### GET /

- **説明**: シンプルな "Hello World!" メッセージを返します。
- **URL**: `/`
- **メソッド**: `GET`

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。
