ReactDOM.render(<h1 className="header">Hello, Everyone!</h1>, document.getElementById('root')) // 1º param: o que será renderizado, 2º param: onde será renderizado

ReactDOM.render(
    <ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul>,
    document.querySelector('#root2')
)

function MainContent() {
    return (
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div> 
        <MainContent />
    </div>, 
    
    document.getElementById('component')
)

const h1 = document.createElement('h1')
h1.textContent = 'This is a text from JS'
h1.className = 'header'
document.getElementById('js').appendChild(h1)