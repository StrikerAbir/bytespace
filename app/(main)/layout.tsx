import PageMaker from "../Layout/PageMaker";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageMaker>
      <main>{children}</main>
    </PageMaker>
  );
}
