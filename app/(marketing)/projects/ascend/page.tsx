import ProjectHero from '@/components/projects/ProjectHero';
import ProjectIframe from '@/components/projects/ProjectIframe';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { getProject } from '@/lib/get-project';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { LaunchAscendButton } from '@/components/projects/LaunchAscendButton';

export const metadata = {
  title: 'Ascend | asixstud.io',
  description: 'Replace addictions with hobbies - A competitive app with friends',
};

export default function AscendProject() {
  const project = getProject('ascend');

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <ProjectHero
          name={project.name}
          tagline={project.tagline}
          description={project.longDescription}
          image={project.image}
          category={project.category}
          color={project.color}
        />

        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscribe CTA — shown to users redirected from ascend.asix.live */}
        <section className="mb-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-lg p-12 text-center border border-amber-200 dark:border-amber-800">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get Access to Ascend</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Subscribe to unlock the full Ascend app — unlimited habit tracking, cloud sync, community features, and more.
          </p>
          <Link href="/checkout">
            <Button size="lg" className="gap-2 px-8">
              Subscribe Now
              <ArrowRight size={18} />
            </Button>
          </Link>
        </section>

        {/* Live App CTA — for returning subscribers */}
        <section className="mb-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-12 text-center border border-blue-200 dark:border-blue-800">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Already Subscribed?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Launch the Ascend app and start your journey to replace addictions with hobbies today.
          </p>
          <LaunchAscendButton />
        </section>

        {/* Description */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About {project.name}</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {project.longDescription}
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you're looking to kick a habit or build a positive one, Ascend provides the tools,
            community, and motivation to succeed. Track your progress, compete with friends, and celebrate
            milestones along the way.
          </p>
        </section>

        {/* CTA */}
        <section className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 border border-slate-200 dark:border-slate-800 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Ascend?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Start your journey to replace addictions with hobbies today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {project.externalUrl ? (
              <Link href={project.externalUrl} target="_blank">
                <Button size="lg" className="gap-2">
                  Launch App <ArrowRight size={18} />
                </Button>
              </Link>
            ) : (
              <Button size="lg" disabled>
                Coming Soon
              </Button>
            )}
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
