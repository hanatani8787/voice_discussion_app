
# Voice Discussion App フロントエンド

これは、Voice Discussion App のフロントエンドアプリケーションです。React Native で構築されています。

## 前提条件

- Node.js (v18.20.3 以降)
- npm (Node Package Manager)
- React Native CLI
- Xcode (iOS 開発用)
- Android Studio (Android 開発用)

## セットアップ

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

## フロントエンドアプリの起動

### iOS シミュレータで実行

1. iOS シミュレータを起動します:

   ```bash
   npx react-native run-ios
   ```

### Android エミュレータで実行

1. Android Studio で Android エミュレータを起動します。
2. Android エミュレータを起動します:

   ```bash
   npx react-native run-android
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
└── metro.config.js        # Metroバンドラの設定ファイル
```

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。
