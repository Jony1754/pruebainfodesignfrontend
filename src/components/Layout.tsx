import SideNav from './SideNav';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-1'>
      <SideNav />
      <div className='flex-grow bg-gray-100 p-6'>{children}</div>
    </div>
  );
}

export default Layout;
