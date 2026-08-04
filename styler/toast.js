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

	// Longer messages stay longer: ~60ms per character, min 3.4s, max 12s.
	var ms = Math.min(Math.max(3400, 1000 + message.length * 60), 12000);
	toast.style.animation = 'toast-in 0.3s ease, toast-out 0.4s ease ' + ((ms - 400) / 1000) + 's forwards';
	toast.style.cursor = 'pointer';
	toast.onclick = function() { toast.remove(); };

	container.appendChild(toast);
	setTimeout(function() { toast.remove(); }, ms);
}
