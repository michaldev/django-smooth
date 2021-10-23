$("[smooth=true]").each(function (index, el) {
    console.log('Registered smooth form.');
    $(el).submit(function (e) {
        e.preventDefault();

        const form = $(this);
        const url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(),
            success: function (data) {
                // for each for data.smooth_decrements
                for (let i = 0; i < data.actions.length; i++) {
                    const action = data.actions[i];
                    const smoothElementsIds = action.elements;

                    // for each for smooth_decrements
                    for (let j = 0; j < smoothElementsIds.length; j++) {
                        const smoothId = smoothElementsIds[j];
                        const domObj = $(`[smooth-id=${smoothId}]`)[0];
                        if (action.action_type.name === 'decrement') {
                            domObj.textContent = (parseInt(domObj.textContent) - parseInt(action.action_type.val)).toString();
                        }
                        if (action.action_type.name === 'increment') {
                            domObj.textContent = (parseInt(domObj.textContent) + parseInt(action.action_type.val)).toString();
                        }
                        if (action.action_type.name === 'remove') {
                            domObj.remove();
                        }
                        if (action.action_type.name === 'add') {
                            domObj.appendChild(action.action_type.rendered_html);
                        }
                        if (action.action_type.name === 'set') {
                            // doesn't work with forms with smooth="true" :/
                            domObj.innerHTML = action.action_type.rendered_html;
                        }
                        if (action.action_type.name === 'add_class') {
                            domObj.addClass(action.action_type.class_name);
                        }
                        if (action.action_type.name === 'remove_class') {
                            domObj.removeClass(action.action_type.class_name);
                        }
                        if (action.action_type.name === 'custom') {
                            eval(action.action_type.js_code);
                        }
                    }
                }
            }
        });
    });
});
