function handleAjaxError(event, xhr, settings, error) {
    let errorDiv = document.getElementById('ajax-client-error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'ajax-client-error-message';
        errorDiv.style.position = 'fixed';
        errorDiv.style.top = '20px';
        errorDiv.style.left = '50%';
        errorDiv.style.transform = 'translateX(-50%)';
        errorDiv.style.background = 'red';
        errorDiv.style.color = 'white';
        errorDiv.style.padding = '10px 20px';
        errorDiv.style.zIndex = 10_000;
        errorDiv.style.borderRadius = '5px';
        document.body.appendChild(errorDiv);
    }
    errorDiv.textContent = (xhr.status === 0
            ? "Connection failed"
            : "Web site error occurred, code " + xhr.status
            + ", error " + xhr.statusText)
        + ". The page will reload shortly.";

    setTimeout(function () {
        globalThis.location.reload();
    }, 5_000);
}

if (typeof $ !== 'undefined') {
    $(document).on('pfAjaxError', handleAjaxError)
}
