import Navbar from './Navbar';

type PageContainerProps = {
	children: React.ReactNode;
	className?: string;
};

export default function PageContainer({ children, className = '' }: PageContainerProps) {
	return (
		<div className={`min-h-screen w-full flex flex-col ${className}`}>
			<Navbar />
			{children}
		</div>
	);
}
