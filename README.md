# Web ページの見た目の差分抽出をするプログラム

## 準備

### 1. imageMagic をインストールする

差分抽出の処理をするために [ImageMagick](https://imagemagick.org/) を使用する

```
brew install imagemagick
```

### 2. playwright をインストールする

スクリーンショットを撮るためのライブラリに [playwright](https://github.com/microsoft/playwright) を使用する

（ヘッドレスブラウザを起動してスクリーンショットを作成できる）

```
npm install
```

### 3. ファイルの実行権限を付与する

このリポジトリの場所へ移動（/PATH/TO/ の部分は各自の環境に合わせること）

```
cd /PATH/TO/webPageDiff
```

diff ファイルのパーミッションを変更する

```
chmod u+x diff
```

## 差分抽出処理の実行

### 1. このリポジトリの場所へ移動

```
cd /PATH/TO/webPageDiff
```

### 2. コマンド実行

```
./diff
```

コマンドプロンプトの入力インターフェースに比較したいページの URL を入力して Enter

ORIGINAL と COMPARE の 2 回入力する

### 3. 自動生成

images/ ディレクトリにスクリーンショットが保存される。その後、比較結果が生成される。

- `diff_pc.png` ・・・PC 版の差分抽出
- `diff_sp.png` ・・・SP 版の差分抽出

画像内の赤色になっている部分が差分である。

## 開発環境の参考

### Code Formatter

- Prettier ・・・ VS Code の[拡張機能](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)を使用

### ディレクトリ構造

```
webPageDiff/
  ├─ .vscode/
  │    └─ settings.json・・・prettierプラグインの自動実行を設定
  │
  ├─ images/・・・生成ファイルを格納（コマンド実行すると生成する）
  │    ├─ original.png・・・元になるページのPC版スクリーンショット
  │    ├─ original_sp.png・・・元になるページのSP版スクリーンショット
  │    ├─ compare.png・・・比較ページのSP版スクリーンショット
  │    ├─ compare_sp.png・・・比較ページのSP版スクリーンショット
  │    ├─ diff_pc.png・・・比較結果の画像：PC版
  │    └─ diff_sp.png・・・比較結果の画像：SP版
  │
  ├─ tasks/
  │    └─ diff.mjs・・・playwrightでスクリーンショットを生成する処理
  │
  └─ diff・・・実行用のシェルスクリプト
```
