import {
  SparklesIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/solid";

const features = [
  {
    name: "Product Development",
    description:
      "Transform your ideas into reality with our expert product development services. From concept to launch, we ensure a seamless and efficient development process.",
    icon: SparklesIcon,
  },
  {
    name: "Technology Consulting",
    description:
      "Stay ahead in the digital landscape with cutting-edge technology development. Leverage our expertise to integrate the latest technologies and enhance your business capabilities.",
    icon: CodeBracketIcon,
  },
  {
    name: "Custom Solutions",
    description:
      "Craft tailored solutions to meet your unique business needs. Our team specializes in creating custom solutions that align perfectly with your goals and requirements.",
    icon: PuzzlePieceIcon,
  },
];

export default function FeatureList() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-3xl">
            Empowering Success Through Technology
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Elevate your business with our comprehensive development services.
            We are dedicated to providing tailored solutions that align
            seamlessly with your strategic objectives.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-2xl sm:mt-8 lg:mt-10 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
