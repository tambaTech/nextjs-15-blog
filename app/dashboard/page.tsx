import { BlogPostCard } from '@/components/General/BlogPostCard';
import { buttonVariants } from '@/components/ui/button';
import { prisma } from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';

async function getPosts(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export default async function Dashboard() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getPosts(user?.id);

  return (
    <div>
      <div className='flex items-center justify-between mb-5'>
        <h2 className='text-xl font-medium'>Your Blog Articles</h2>

        <Link className={buttonVariants()} href='/dashboard/create'>
          Create Post
        </Link>
      </div>

      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {data.map((item) => (
          <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
