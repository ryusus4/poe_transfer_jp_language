この拡張スクリプトは、Google拡張機能の「Tampermonkey」を使用して、Path of Exile（PoE）トレードサイトの英日変換を行う機能です。
特に、英語で書かれたアイテムの特殊なMODを検索する際に、検索のしやすさを向上させることを目的としています。

このスクリプトを導入すると、アイテムをスタッツフィルターで絞り込んだ状態でのみ日英変換が可能になります。（注：アイテム名の日英変換はできません）

# 導入方法
1. Google拡張機能の「[Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=ja)」をインストールする
2. https://github.com/ryusus4/poe_transfer_jp_language/raw/main/poe_transfer_jp_language.user.js から拡張スクリプトをインストールする

# 使い方
検索をかけた状態で、右上の国アイコンをクリックすると変換されます

![demo](https://gyazo.com/135d9d9f8aeacaf6b993fa0a7047a3f4/raw)

# 注意点
アイテム名を用いた検索の場合、変換が適切に動作しません。
例: 【Mageblood Heavy Belt】（英語版）を名前で検索した状態では【メイジブラッド ヘビーベルト】（日本語版）に移行できません。
(名前ではなくスタットフィルターに「LEFTMOST # MAGIC UTILITY FLASK CONSTANTLY APPLIES ITS FLASK EFFECT TO YOU」(左から#個のマジックユーティリティフラスコのフラスコ効果が常にプレイヤーに適用される)等で検索することで回避することはできます)
