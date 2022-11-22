import { NextPage } from 'next';

const Privacy: NextPage = () => {
	return (<>
		<div id="content" className="p-8">
			<h1 className="text-center text-5xl title">Terms of use</h1>
			<p className="max-w-4xl text-xl mt-2 mx-auto normal-text">
				By using Tree Farmer you automatically agree to comply with the following terms and will accept punishment given for the broken term(s). Not reading the terms and breaking a term is an unacceptable excuse. You also must follow Discord's Terms and Luyx Development's Terms.
				<ul className="list-disc">
					<li>
						Don't abuse commands (spam commands and buttons)
					</li>
				</ul>
			</p>
		</div>
	</>);
};

export default Privacy;