import "../globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function MeetingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <html
      lang="en">
      <body>
       
        {children}
        
        </body>
    </html>

  );
}