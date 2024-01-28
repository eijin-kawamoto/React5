export default function Image() {
    return (
          <figure className="image">
            <img
              src="{{ dog|safe }}"
              alt="your shibe"
            />
          </figure>
    );
  }