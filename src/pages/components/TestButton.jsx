// use this component to test dynamic functions

import {switchTheme} from "../pagejs/switchTheme";

import makeElementDraggable from "../pagejs/makeDraggable";

window.onload = function() {
    makeElementDraggable(document.getElementById('test-button'));
}

const TestButton = () => {
    const styles = {
        position: 'fixed',
        width: '50px',
        height: '50px',
        backgroundColor: 'var(--inverse-primary)',
        color: 'var(--colour-primary)',
        top: '95%',
        left: '95%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 'var(--border-radius)',
        border: '3px solid #a05af7',
    }

    return (
        <button 
            id='test-button'
            onClick={switchTheme}
            // onClick={enableDarkMode}
            
            style={styles}
        >test</button>
    )
}
export default TestButton;