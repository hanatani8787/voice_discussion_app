
# Voice Discussion App

Voice Discussion App は、ユーザーが音声を使用して議論し、その内容を自動的に文字起こしするためのアプリケーションです。React Native を使用したフロントエンドと、Node.js と Express を使用したバックエンドで構成されています。

## 構成

- フロントエンド: React Native
- バックエンド: Node.js と Express
- データベース: PostgreSQL
- 音声認識: Mozilla DeepSpeech

## 前提条件

- Node.js (v18.20.3 以降)
- npm (Node Package Manager)
- React Native CLI
- Xcode (iOS 開発用)
- Android Studio (Android 開発用)

## セットアップ

### フロントエンド

1. リポジトリをクローンし、プロジェクトディレクトリに移動します:

   ```bash
   git clone https://github.com/yourusername/voice_discussion_app.git
   cd voice_discussion_app
   ```

2. 必要な依存関係をインストールします:

   ```bash
   npm install
   ```

3. iOSの依存関係をインストールします:

   ```bash
   cd ios
   pod install
   cd ..
   ```

4. iOS シミュレータを起動します:

   ```bash
   npx react-native run-ios
   ```

5. Android エミュレータを起動します:

   ```bash
   npx react-native run-android
   ```

### バックエンド

1. `backend` ディレクトリに移動します:

   ```bash
   cd backend
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

4. サーバーを起動します:

   ```bash
   node index.js
   ```

## フォルダ構成

```
voice_discussion_app/
│
├── android/               # Android関連ファイル
├── ios/                   # iOS関連ファイル
├── src/                   # ソースコード
│   ├── App.tsx           # アプリのエントリーポイント
│   └── ...               # その他のソースコードファイル
├── node_modules/          # 依存関係
├── package.json           # プロジェクトの設定と依存関係
├── babel.config.js        # Babelの設定ファイル
├── metro.config.js        # Metroバンドラの設定ファイル
├── README.md              # プロジェクト概要のREADMEファイル
└── backend/               # バックエンドプロジェクトのディレクトリ
    ├── .env               # 環境変数
    ├── index.js           # サーバーのエントリーポイント
    ├── package.json       # プロジェクトの設定と依存関係
    ├── controllers/       # コントローラ（必要に応じて）
    ├── models/            # モデル（必要に応じて）
    ├── routes/            # ルーティング（必要に応じて）
    ├── utils/             # ユーティリティ（必要に応じて）
    └── README.md          # バックエンドのREADMEファイル
```

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。
