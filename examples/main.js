import strem from '../src/strem';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/abcdef.css';
import CodeMirror from 'codemirror';

const myCodeMirror = CodeMirror(document.getElementById('container'), {value: 'foobar', theme: 'abcdef', lineNumbers: true});

const myStream = strem`(1.5 | 2, 2.5 -> delay 1s -> map ${x => x * 2} | 1, 2 -> delay 0.5s) -> filter ${x => x % 2 === 1} -> map ${x => x - 1}`;

const subscription = myStream.subscribe({
    next: (value) => console.log(value),
    complete: () => {
        subscription.unsubscribe();
        console.log('Completed!');
    },
    error: (error) => console.error(error)
});
