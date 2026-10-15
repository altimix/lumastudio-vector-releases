# LumaStudio Vector

レーザーカッター専用の日本語ベジェ曲線Webアプリです。

- [アプリを開く](https://lumastudiovector.altimix.jp/app)
- [公式サイト・使い方](https://lumastudiovector.altimix.jp/)
- [v0.1.0の配布ファイル](https://github.com/altimix/lumastudio-vector-releases/releases/tag/v0.1.0)

## できること

Illustratorの基本ペン・アンカー操作に合わせた曲線編集、mmの寸法、切断と線彫刻のレイヤー、保存・復元、SVG・DXF出力に対応します。SVGは曲線を保持し、DXFは許容誤差0.05 mmの折れ線で保存します。

PCブラウザーのマウス・キーボード操作を推奨します。実機への接続・送信や速度・出力設定はレーザー制御ソフトで行ってください。LightBurn等での実取り込み・実機加工は未検証です。

## 公開配布について

このリポジトリは公開配布専用です。開発用のソース、テスト、Git履歴、source mapは含みません。site/はCIで確認したビルド済みWebアプリと公式サイトです。ブラウザーへ配信するJavaScript自体は閲覧可能です。

ZIPは静的Webホスティング用です。Webルートに展開すると公式サイトが /、編集アプリが /app/ に配置されます。index.htmlを直接ダブルクリックする使い方には対応していません。通常は上記の公開アプリURLをお使いください。

## データと条件

編集データはブラウザー内で扱います。ブラウザーのデータ削除で自動保存は消えるため、.lumavector制作ファイルも保存してください。

[利用許諾条件](LICENSE.txt) / [第三者部品のライセンス](THIRD_PARTY_NOTICES.txt)

SHA-256と配布内容はReleaseのSHA256SUMS.txtと[BUILD.json](BUILD.json)に記録します。
