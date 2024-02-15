import clsx from 'clsx';
import React, { FC } from 'react';
import {
  AccessControlIcon,
  BlackBoxIcon,
  IdentityIcon,
  MonitorIcon,
  SelfHostedIcon,
  SupportIcon,
} from './landing';

// import { LandingSectionCtaButtonAlt } from "./landing-section-cta-button";
import styles from './styles.module.css';

const list = [
  {
    icon: <SelfHostedIcon />,
    title: 'Self-host for compliance',
    description:
      'Deploy to your own infrastructure without worrying about regulations, performance, and stability. Maintain your current security best practices with no compromises.',
  },
  {
    icon: <IdentityIcon />,
    title: 'Leverage the power of your existing Identity Provider',
    description:
      'Native support for Okta, Azure AD, Amazon Cognito & Google Cloud Identity.',
  },
  {
    icon: <AccessControlIcon />,
    title: 'Achieve fine-grained access control',
    description:
      'Out-of-the-box support for widely accepted authorization models including ACL, RBAC & ABAC.',
  },
  {
    icon: <BlackBoxIcon />,
    title: 'Unlock the black box',
    description:
      'Implement an open-source solution with an open architecture. Save yourself from the hassle of adding another proprietary component to your stack.',
  },
  {
    icon: <MonitorIcon />,
    title: 'Effortlessly monitor your application',
    description:
      'Ready-made providers and components for audit logging and usage analytics.',
  },
  {
    icon: <SupportIcon />,
    title: 'Get supported by the experts',
    description:
      'Enroll in plans that provide priority support, trainings and consulting.',
  },
];

type Props = {
  className?: string;
};

export const LandingEnterpriseDevelopers: FC<Props> = ({ className }) => {
  return (
    <div className='w-full gap-4 flex flex-col'>
      <div
        className={clsx(
          'mt-8 sm:mt-12 lg:mt-20',
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
          'gap-4 sm:gap-12 md:gap-6'
        )}
      >
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className={clsx(
                'flex flex-col sm:flex-row md:flex-col items-start',
                'items-start gap-6 p-4 sm:p-10',
                'rounded-2xl sm:rounded-3xl',
                'bg-gray-50 dark:bg-[#1d1e30]'
              )}
            >
              <div>{item.icon}</div>
              <div className='flex flex-col gap-4'>
                <div className='text-xl font-semibold'>{item.title}</div>
                <div className='text-gray-600 dark:text-gray-400'>
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
