const RenderIf = ({ children, when = true }) => {
    if (when) return children;
    return null;
};

export default RenderIf;
