import Cube from "./assets/images/cube.svg";

function NotFound() {
    return (<>
        <div id="content" className="h-screen w-screen grid items-center">
            <div>
                <img alt="Bremea development small" src={Cube} className="mx-auto h-16 md:h-32" />
                <h1 className="text-2xl md:text-4xl text-center mt-4">
                    This page doesn't exist.
                </h1>
            </div>
        </div>
    </>);
}

export default NotFound;