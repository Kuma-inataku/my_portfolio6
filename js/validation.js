$(function(){
  //<form>タグのidを指定
  $("#formCheck").validationEngine(
      'attach', {
          promptPosition: "topLeft"//エラーメッセージ位置の指定
      }
  );
});