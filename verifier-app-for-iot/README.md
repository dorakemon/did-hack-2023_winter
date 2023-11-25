# electron-vite-react-template

## Getting Started

### 開発環境構築

1. pnpm をインストール

```
# macOS or Linux
$ curl -fsSL https://get.pnpm.io/install.sh | sh -
# Windows (PowerShell)
$ iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### インストール

```bash
pnpm install
```

## コマンド一覧

```bash
# 開発環境スタート
pnpm run dev
# パッケージング
pnpm run create-distribution
# Reactのみスタート
pnpm run vite:dev
# Electronのみスタート(vite:dev実行中のみ)
pnpm run electron:dev
```

## Project Structure

Vite+React+Electron+Prettier+Eslint

### ディレクトリ構成

```sh
├── dist/ # build
└── electron/
└── out/ # 実行可能ファイルが生成される場所
└── public/
└── src/
```
