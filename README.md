# 20230330-calculator
Created with CodeSandbox


## 仕組み

電卓はシンプルなReactコンポーネント構造を持っています：
- `App`コンポーネントが電卓の状態を管理
- ユーザー入力は`useState`フックで管理
- ボタンクリックで表示を更新
- 計算はJavaScriptの`eval()`関数を使用
- エラー処理で無効な式からのクラッシュを防止
