function showToast(message, type) {
	var container = document.querySelector('.toast-container');
	if (!container) {
		container = document.createElement('div');
		container.className = 'toast-container';
		document.body.appendChild(container);
	}
	var toast = document.createElement('div');
	toast.className = 'alert toast' + (type ? ' ' + type : '');
	toast.textContent = message;
	container.appendChild(toast);
	setTimeout(function() { toast.remove(); }, 3400);
}
