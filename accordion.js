(() => {

    const $elm = document.querySelector('#js-accordion');
    const $trigger = $elm.getElementsByTagName('a');
    /*        <div class="accordion" id="js-accordion">
            <a href="" class="accordion-trigger">
                Q1.人生楽しい方法は？
            の中の、class="accordion-trigger"を２行目では取って$triggerに代入している。
 */

    const triggerLen = $trigger.length;
    let index = 0;
    while (index < triggerLen) {
        $trigger[index].addEventListener('click', (e)=> clickHandler(e));
        index++;
    }


//クリックしたら実行される処理
    const clickHandler = (e) => {
        e.preventDefault();

        const $target = e.currentTarget;

        const $content = $target.nextElementSibling;
/*trigger[0].nextElementSiblingは$triggerの次の要素をとりに行ってる。
<a href="" class="accordion-trigger">
    Q1.人生楽しい方法は？
</a>
<div class="accordion-contents"> <---２個目のこれを取得しに行ってる。
    A1.クラシックおすすめ。
</div>
 */

        if($content.style.display === 'block') {
            $content.style.display = 'none';
        } else {
            $content.style.display = 'block';
        }

    }
})();