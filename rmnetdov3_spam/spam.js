window.rcmail && rcmail.addEventListener('init', function (evt) {
    rcmail.register_command('plugin.rmnetdov3_spam.save', function () {
        document.forms.spam_form.submit();
    }, true);
});
