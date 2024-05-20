/**
+ * Context 객체를 인수로 받아 그 context의 현재 값을 반환한다.
+ * 현재 Context 값은 트리 안에서 이 Hook을 호출하는 컴포넌트에 가장 가까이에 있는 value prop에 의해 결정된다.
+ * 
+ * Component 위의 가장 가까운 Provider가 업데이트되면 Hook은 해당 Provider에게 전달된 최신의 context value를 사용하여 렌더링된다.
+ 
+*/

const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

const ThemeContext = React.createContext(themes.light);

function App() {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar(props) {
    return (
        <div>
            <ThemedButton />
        </div>
    );
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}
