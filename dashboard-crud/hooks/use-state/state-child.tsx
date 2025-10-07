type StateChildProps = {
  count: number;
};

export default function StateChild({ count }: StateChildProps) {
  // const { count } = props;
  // return <div>Child Count: {props.count}</div>;
  return <div>Child Count: {count}</div>;
}
