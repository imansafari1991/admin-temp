const LoginLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="w-full h-full bg-slate-100">{children}</div>
    );
}

export default LoginLayout;