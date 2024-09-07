import { education } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Education = () => {
  return (
    <Section id="education">
      <div className="mt-10"></div>
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Education" />
        <div className="flex flex-wrap gap-10 mt-10 mb-10">
          {education.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[48%] border-2 border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-xl before:border-[0.6px] before:border-transparent before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500 before:bg-[length:600%_600%] before:animate-gradient-border"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                <div className="details">
                  <img
                    src={item.logo1}
                    width={40}
                    height={50}
                    alt={item.title}
                  />
                  {item.text1}
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
