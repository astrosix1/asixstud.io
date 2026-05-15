import { getProject } from '@/lib/get-project';
import { LaunchWikiHoleButton } from '@/components/projects/LaunchWikiHoleButton';
import { ProjectTemplateWrapper } from '@/components/projects/ProjectTemplateWrapper';

export const metadata = {
  title: 'WikiHole | asix.live',
  description: 'The rabbit hole that sticks — explore Wikipedia rabbit holes and build lasting knowledge with AI-generated spaced-repetition cards.',
};

export default function WikiHoleProject() {
  const project = getProject('wikihole');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Project not found</h1>
          <p className="text-slate-600">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <ProjectTemplateWrapper
      project={project}
      projectSlug="wikihole"
      launchButtonComponent={<LaunchWikiHoleButton />}
    />
  );
}
