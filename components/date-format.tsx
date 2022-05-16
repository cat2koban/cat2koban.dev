import { VFC } from 'react';
import dayjs, { extend } from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';

extend(relativeTime);

type Props = {
  /**
   * ISO8601 date string
   */
  date: string
};

export const PostDateFormat: VFC<Props> = ({ date }) => (
  <time className="text-gray-500" dateTime={date}>{dayjs(date).format('MMMM DD, YYYY')} ({dayjs(date).fromNow()})</time>
)

export const TitleDateFormat: VFC<Props> = ({ date }) => (
  <time className="text-gray-500" dateTime={date}>{dayjs(date).format('MMMM DD, YYYY')}</time>
)