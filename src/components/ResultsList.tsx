import type { RepoDetails } from '../types/repo.types';
import { RepoItem } from './RepoItem';

export function ResultsList({ repos }: { repos: RepoDetails[] }) {
  // const repos = [
  //     {name: 'Qwerty asdfg', description: 'Asdfg kdjtfgh dsug dkjfg'},
  //     {name: 'Uhdbvf', description: 'Dbsdghfvs sdhfd usdhfiudh'},

  //     {name: 'Phjsbdcf asdfg', description: 'Zxcj irjgijrg'},

  //     {name: 'Lhjsbdf mxcmbfvyus drgdgd', description: 'Mbxncv eriugh ywhf hjsb h dihgfd dfightisygtugfs'},

  // ]; // mock

  return (
    <div className="flex flex-col gap-2">
      {repos.map((item) => (
        <RepoItem
          // if item.avatar changes we need to remount RepoItem to rerun useState(avatar || greyPlaceholder) inside it
          key={item.id + (item.avatar ?? '')}
          name={item.name}
          description={item.description}
          avatar={item.avatar}
        />
      ))}
    </div>
  );
}
