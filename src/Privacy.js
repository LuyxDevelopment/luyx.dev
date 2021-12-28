function Privacy() {
    return (<>
        <div id="content" className="p-8">
            <h1 className="text-center text-5xl title">Privacy policy</h1>
            <p className="max-w-4xl text-xl mt-2 mx-auto normal-text">
                <b>Publicly Visible Data</b> - Data visible in the channel that you run commands in
                <ul className="list-disc">
                    <li>
                        Your farm and its components (money, name, cutters, vehicles etc.)
                    </li>
                    <li>
                        The number of votes you have for Tree Farmer
                    </li>
                </ul>
                <b>Privately Stored Data</b> - Data stored in our Database or private Discord channels
                <br />
                <ul className="list-disc">
                    <li>
                        This data will be kept private from anyone outside the team (team members can be found in the Discord server by their highest role, this includes moderators)
                    </li>
                    <li>
                        Your farm and its components (money, name, cutters, vehicles etc.)
                    </li>
                    <li>
                        Your Discord ID e.g. 292821168833036288 (used for finding who the data belongs to)
                    </li>
                    <li>
                        The name of commands that are run in your servers, including the server ID and name (logged in a text channel)
                    </li>
                    <li>
                        Your API requests (timestamp, endpoints, paths, methods, queries, bodies and headers)
                    </li>
                </ul>
            </p>
        </div>
    </>);
}

export default Privacy;