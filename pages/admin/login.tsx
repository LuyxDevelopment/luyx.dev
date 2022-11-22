import { NextPage } from 'next';
import InProgress from '../../components/InProgress';

const AdminLogin: NextPage = () => {
	return (
		<InProgress pageName='admin'></InProgress>
	);
};

export default AdminLogin;