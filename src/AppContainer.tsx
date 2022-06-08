import CreateRoute from './routes';

interface AppContainerProps {
    children: React.ReactElement;
}

function AppContainer({ children }: AppContainerProps) {
    return (
        <>
            <CreateRoute />
            {children}
        </>
    );
}

export default AppContainer;
