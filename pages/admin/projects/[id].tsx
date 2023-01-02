import type { NextPage, NextPageContext } from 'next';
import Layout from '../../../components/Layout';
import { useMetaData } from '../../../lib/hooks/useMetaData';
import ProjectPage from '../../../components/ProjectPage';
import { APIProject, BaseAuthRouteOptions } from 'luyx-management-api-types/v1';

interface Props {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	project: APIProject & { _id: string; };
}

const AdminProjectsDynamic: NextPage<Props> = ({ project }) => {
	return (
		<>
			<Layout>
				<div className="container">
					<ProjectPage project={project} />
				</div>
			</Layout>
		</>
	);
};

export const getServerSideProps = async ({ query }: NextPageContext & { query: { id: string; }; }): Promise<{ props: { project: APIProject; }; }> => {
	const request = await fetch(
		`https://api.luyx.dev/v1/projects/${query.id}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': process.env.LUYX_API_KEY
			},
		},
	);

	const response = (await request.json()) as BaseAuthRouteOptions<APIProject>['Reply'];
	console.log(response.data);

	return {
		props: {
			project: response.data!,
		},
	};
};

export default AdminProjectsDynamic;
