window.useTime = function (startDate, onUpdate) {
    function update() {
        const timeCompare = new Date(startDate);
        const currenttime = new Date();

        const timeDifference = currenttime.getTime() - timeCompare.getTime();

        if (timeDifference < 0) return;

        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const años = Math.floor(days / 365);

        onUpdate({
            days,
            hours,
            minutes,
            seconds,
            años
        });
    }

    update();
    const interval = setInterval(update, 1000);

    return () => clearInterval(interval);
}
