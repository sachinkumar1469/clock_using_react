
function tick(){
    const displayTime = (
        <div id = "main">
            <h1>Hello!</h1>
            <h2>Digital Clock Using React!</h2>
            <p>{new Date().toLocaleTimeString()}</p>
        </div>
    )
    ReactDOM.render(displayTime,document.getElementById('root'));
}
setInterval(tick,1000);
