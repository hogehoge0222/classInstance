document.addEventListener('DOMContentLoaded', () => {
    class Accordion {
        constructor(obj) {
            console.log('obj', obj.hookName, obj.tagName);
            
            const $elm = document.querySelector(obj.hookName);
            if (!$elm) {
                console.error(`Element with selector "${obj.hookName}" not found.`);
                return;
            }

            const $trigger = $elm.getElementsByTagName(obj.tagName);
            const triggerLen = $trigger.length;
            let index = 0;
            while (index < triggerLen) {
                $trigger[index].addEventListener('click', (e) => this.clickHandler(e));
                index++;
            }
        }

        clickHandler(e) {
            e.preventDefault();
            const $target = e.currentTarget;
            const $content = $target.nextElementSibling;
            if ($content.style.display === 'block') {
                $content.style.display = 'none';
            } else {
                $content.style.display = 'block';
            }
        }
    }

    // インスタンスの生成
    const goodAccordion = new Accordion({
        hookName: '#js-faq',
        tagName: 'p'
    });
});
