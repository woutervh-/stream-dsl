import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'debounce';
import strem from '../src/strem';
import of from '../src/stream/generators/of';

CodeMirror.defineSimpleMode('simplemode', {
    start: [
        {regex: /"(?:[^\\]|\\.)*?(?:"|$)/, token: "string"},
        {
            regex: /(function)(\s+)([a-z$][\w$]*)/,
            token: ["keyword", null, "variable-2"]
        },
        {
            regex: /(?:map|filter|delay)\b/,
            token: "keyword"
        },
        {regex: /true|false|null|undefined/, token: "atom"},
        {
            regex: /0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,
            token: "number"
        },
        {regex: /\/\/.*/, token: "comment"},
        {regex: /\/(?:[^\\]|\\.)*?\//, token: "variable-3"},
        {regex: /\/\*/, token: "comment", next: "comment"},
        {regex: /[-+\/*=<>!]+/, token: "operator"},
        {regex: /[\{\[\(]/, indent: true},
        {regex: /[\}\]\)]/, dedent: true},
        {regex: /[a-z$][\w$]*/, token: "variable"}
    ],
    comment: [
        {regex: /.*?\*\//, token: 'comment', next: 'start'},
        {regex: /.*/, token: 'comment'}
    ],
    meta: {
        dontIndentStates: ['comment'],
        lineComment: '//'
    }
});

const myCodeMirror = CodeMirror(document.getElementById('container'), {
    theme: 'abcdef',
    lineNumbers: true,
    mode: 'simplemode'
});

class Controls extends React.Component {
    state = {
        text: '(1.5 | 2, 2.5 -> delay 1s -> map ${x => x * 2} | 1, 2 -> delay 0.5s) -> filter ${x => x % 2 === 1} -> map ${x => x - 1}'
    };

    componentWillMount() {
        myCodeMirror.setValue(this.state.text);

        myCodeMirror.on('change', debounce((instance) => {
            this.setState({text: instance.getValue()});
        }, 200));
    }

    render() {
        return <div>
            Controls
        </div>;
    }
}

const myStream = strem`(1.5 | 2, 2.5 -> delay 1s -> map ${x => x * 2} | 1, 2 -> delay 0.5s) -> filter ${x => x % 2 === 1} -> map ${x => x - 1}`;
// const myStream = strem`${of({foo: 1, bar: 2, not: 3})} -> {... ${(key, value) => key !== 'not' && of(value)}}`;

let completed = false;
const subscription = myStream.subscribe({
    next: (value) => console.log(value),
    complete: () => {
        if (subscription) {
            subscription.unsubscribe();
        } else {
            completed = true;
        }
        console.log('Completed!');
    },
    error: (error) => console.error(error)
});
if(completed) {
    subscription.unsubscribe();
}

ReactDOM.render(<Controls/>, document.getElementById('controls'));
