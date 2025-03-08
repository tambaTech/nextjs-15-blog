import { handleSubmission } from '@/app/actions';
import { SubmitButton } from '@/components/General/SubmitButton';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function CreateBlogRoute() {
  return (
    <div>
      <Card className='max-w-lg mx-auto'>
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>
            Create a new post for your blog here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-4' action={handleSubmission}>
            <div className='flex flex-col gap-2'>
              <Label>Title</Label>
              <Input
                name='title'
                placeholder='Please enter your title'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label>Content</Label>
              <Textarea
                name='content'
                placeholder='Please enter your content'
                required
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label>Image URL</Label>
              <Input
                name='url'
                placeholder='Please enter your image URL'
                required
              />
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
