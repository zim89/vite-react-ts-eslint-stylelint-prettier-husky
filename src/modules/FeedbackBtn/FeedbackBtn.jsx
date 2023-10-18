import { UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

import AddFeedbackModal from './components/AddFeedbackModal';
import css from './styles/FeedbackBtn.module.css';

function FeedbackBtn() {
  const [opened, { open, close }] = useDisclosure(false);
  const { t } = useTranslation();

  return (
    <>
      <UnstyledButton className={css.feedbackBtn} onClick={open}>
        {t('common.feedback')}
      </UnstyledButton>
      {opened && <AddFeedbackModal onClose={close} />}
    </>
  );
}

export default FeedbackBtn;
