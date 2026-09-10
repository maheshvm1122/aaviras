import './globals.css';
import { SiteHeader } from '@/components/home/SiteHeader';

export const metadata={
 title:'AAVIRA — Kanjivaram Silk Sarees',
 description:'Discover AAVIRA’s curated Kanjivaram, pattu, silk, Banarasi, cotton, fancy and designer sarees with a premium 3D drape experience.',
};

export default function RootLayout({children}:{children:React.ReactNode}){
 return <html lang="en"><body><SiteHeader/>{children}</body></html>
}
