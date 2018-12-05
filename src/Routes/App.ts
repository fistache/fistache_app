export default ({bind}: any) => {
    bind("/", () => import("../View/IndexPage.seafood"));
};
